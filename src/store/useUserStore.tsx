import { create } from "zustand";
import { persist } from "zustand/middleware";
interface MyUser {
  user: User[];
  total: any;
  totalPrice: () => void;
  login: (prop: User) => void;
  logout: (prorp: User) => void;
  remove: (prop: User) => void;
  increase: (prop: User) => void;
}

interface User {
  id?: string;
  name: string;
  price: number;
  quant: number;
}

export const useUserStore = create<MyUser>()(
  persist(
    (set, get) => ({
      user: [],
      total: null,
      login: (prop: User) => {
        const { user } = get();
        const existingUser = user.find(
          (ele) => ele.name === prop.name && ele.price === ele.price
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
            id: prop.name + Date.now(),
            name: prop.name,
            price: prop.price,
            quant: prop.quant ? prop.quant : 1,
          };
          set({ user: [...user, data] });
        }
      },
      logout: (prop: User) => {
        const { user } = get();
        const filtered = user.filter((user1) => !(user1.id === prop.id));
        console.log("this is filter", filtered);
        set({ user: filtered });
      },
      remove: (prop: User) => {
        const { user } = get();
        const updtatedArray = user.map((items) => {
          if (items.id === prop.id) {
            return { ...items, quant: prop.quant - 1 };
          }
          return items;
        });

        const array = updtatedArray.find((ele) => ele.id === prop.id);
        if (array && array.quant <= 0) {
          const filter = user.filter((ele) => !(ele.id === prop.id));
          set({ user: filter });
        } else {
          set({ user: updtatedArray });
        }
      },
      increase: (prop: User) => {
        const { user } = get();
        const update = user.map((item) => {
          if (item.id === prop.id) {
            return { ...item, quant: item.quant + 1 };
          }
          return item;
        });
        set({ user: update });
      },
      totalPrice: () => {
        const { user } = get();
        var sum1 = 0;
        if (user) {
          user.map((items) => {
            sum1 += items.price * items.quant;
          });
          set({ total: sum1 });
        }
      },
    }),
    {
      name: "user-store", // localStorage key
    }
  )
);
