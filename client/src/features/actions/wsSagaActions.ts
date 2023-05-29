import { SOCKET_CLOSE, SOCKET_CONNECT, SOCKET_INIT, WsConnectType, WsInitType } from "../../types";

export const sockeiInitAction = (): WsInitType => ({
    type: SOCKET_INIT
})

export const socketConnectAction = (): WsConnectType => ({
    type: SOCKET_CONNECT
})

export const socketCloseAction = (): WsCloseType => ({
    type: SOCKET_CLOSE
})