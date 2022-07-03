import create from "zustand";

interface LoginState {
  name: string;
  setName: (name: string) => void;
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

const useLoginStore = create<LoginState>((set) => ({
  name: "",
  setName: (name) =>
    set((state) => ({
      ...state,
      name
    })),

  phoneNumber: "",
  setPhoneNumber: (phoneNumber) =>
    set((state) => ({
      ...state,
      phoneNumber
    })),

    email: "",
    setEmail: (email) => set((state)=> ({
        ...state,
        email
    })),

    password: "",
    setPassword: (password) => set((state)=>({
        ...state,
        password
    }))
}));


interface ModalState {
    isShown: boolean;
    toggleModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
    isShown: false,
    toggleModal: () => set((state) => ({...state, isShown: !state.isShown}))
}))
export {useLoginStore, useModalStore};