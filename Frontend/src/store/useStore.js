import create from 'zustand';
import createUserSlice from './slice/createUserSlice'

const useStore = create((set,get)=>({
   ...createUserSlice(set,get),

}));

export default useStore;