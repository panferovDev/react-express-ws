export type SignUpFormType = {
  name: string;
  email: string;
  password: string;
};

export type SignInFormType = {
  email: string;
  password: string;
};


export type UserType = {
  status: 'idle'| 'fetching' | 'error';
  data: UserFromBack | null;
}

export type UserFromBack = {
  id: number;
  name: string;
};

