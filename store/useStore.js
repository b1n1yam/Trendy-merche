import { create } from "zustand";
const useCartStore = create((set) => ({
    cart: 0,
    add: () => set((state) => ({ cart: state.cart + 1 })),
    remove: () => set((state) => ({ cart: state.cart - 1 })),
    removeAll: () => set({ cart: 0 }),
}));

export const useLoginModal = create((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export const useRegisterModal = create((set) => ({
    isRegisterOpen: false,
    onRegisterOpen: () => set({ isRegisterOpen: true }),
    onRegisterClose: () => set({ isRegisterOpen: false })
}));
export const useIsLogged = create((set) => ({
    // const Cookiesdata = getCookie('userInfo');
    isLogged: false,
    onLogin: () => set({ isLogged: true }),
    onLogout: () => set({ isLogged: false })
}));

export default useCartStore;

