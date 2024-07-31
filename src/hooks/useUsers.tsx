import axios from "axios"
import type { ReqResUserListResponse, User } from "../interfaces"
import { useEffect, useRef, useState } from "react"

const loadUsers = async (page: number = 1): Promise<User[]> => {
    try {
        //axios
        const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users', { params: { page: page } })

        //fetch
        // fetch('https://reqres.in/api/users')
        //     .then(resp => resp.json())
        //     .then(data => console.log(data))

        return data.data
    } catch (error) {
        console.log(error)
        return []
    }
}

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const currentPageRef = useRef(1);

    useEffect(() => {
        loadUsers(currentPageRef.current).then(setUsers);  // Esta función se ejecuta solo una vez al cargar la página
    }, []);

    const nextPage = async () => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current);
        if (users.length > 0) {
            setUsers(users);
        } else {
            currentPageRef.current--;
        }
    }

    const prevPage = async () => {
        if (currentPageRef.current < 1) return

        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current);
        setUsers(users);
    }

    return {
        //Property
        users,

        //Methods
        nextPage,
        prevPage,
    }
}
