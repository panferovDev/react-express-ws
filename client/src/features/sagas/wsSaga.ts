import type { EventChannel } from 'redux-saga';
import { eventChannel, END } from 'redux-saga';
import { SOCKET_INIT, WsActionTypes } from '../../types';
import { socketConnectAction } from '../actions/wsSagaActions';
import { take, put, call, takeEvery, fork, ActionPattern, CallEffectDescriptor, CallEffect } from 'redux-saga/effects';

function createSocketChannel(socket: WebSocket): EventChannel<WsActionTypes> {
  return eventChannel((emit) => {
    socket.onopen = () => {
      emit(socketConnectAction());
    };

    socket.onmessage = (event: MessageEvent<string>) => {
      const parsedData = JSON.parse(event.data) as WsActionTypes;
      emit(parsedData);
    };

    socket.onerror = () => {
      emit(END);
    };

    socket.onclose = () => {
      emit(END);
    };
    return () => {
      console.log('Socket off');
      emit(END);
    };
  });
}

function* messageWorker(): Generator<unknown,void, WsActionTypes> {
  const socket = new WebSocket('ws://localhost:3001');
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    try {
        const action = yield take(socketChannel as unknown as ActionPattern<WsActionTypes>);
    } catch (error) {
      console.log('Socket error: ', error);
    }
  }
}

export default function* initWebSocketWatcher(): Generator {
  yield takeEvery(SOCKET_INIT, messageWorker);
}
