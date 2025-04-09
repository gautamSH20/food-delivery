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
      remove: (prop: User) => {
        const { user } = get();
        const updtatedArray = user.map((items) => {
          if (items.name === prop.name && items.price === prop.price) {
            return { ...items, quant: prop.quant - 1 };
          }
          return items;
        });

        const array = updtatedArray.find((ele) => ele.name === prop.name);
        if (array && array.quant <= 0) {
          const filter = user.filter(
            (ele) => !(ele.name === prop.name && ele.price === prop.price)
          );
          set({ user: filter });
        } else {
          set({ user: updtatedArray });
        }
      },
      increase: (prop: User) => {
        const { user } = get();
        const update = user.map((item) => {
          if (item.name === prop.name && item.price === prop.price) {
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
