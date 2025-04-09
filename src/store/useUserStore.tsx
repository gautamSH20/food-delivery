import { create } from "zustand";
import { persist } from "zustand/middleware";
interface MyUser {
  user: User[];
  login: (prop: User) => void;
  logout: (prorp: User) => void;
}

interface User {
  name: string;
  price: number;
  quant: number;
}

export const useUserStore = create<MyUser>()(
  persist(
    (set, get) => ({
      user: [],
      login: (prop: User) => {
        const { user } = get();
        const existingUser = user.find(
          (ele) => ele.name === prop.name && ele.price === prop.price
        );
        if (existingUser) {
          const updatedUser = user.map((items) => {
            if (items.name === prop.name && items.price === prop.price) {
              return { ...items, quant: items.quant + 1 };
            }
            return items;
          });

          set({ user: updatedUser });
        } else {
          const data = {
            name: prop.name,
            price: prop.price,
            quant: prop.quant,
          };
          set({ user: [...user, data] });
        }
      },
      logout: (prop: User) => {
        const { user } = get();
        const filtered = user.filter(
          (user1) => !(user1.name === prop.name && user1.price === prop.price)
        );
        console.log("this is filter", filtered);
        set({ user: filtered });
      },
    }),
    {
      name: "user-store", // localStorage key
    }
  )
);
