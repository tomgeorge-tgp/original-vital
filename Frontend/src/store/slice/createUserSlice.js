
const createUserSlice=(set,get)=>({
    users:[],
    fetchUsers:async()=>{
        const res=await fetch("");
        set({users:await res.json()});
    }
});

export default createUserSlice;