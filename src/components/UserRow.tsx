import type { User } from "../interfaces";

interface UserRowProps {
    user: User;  // Definimos que UserRowProps necesita un user de tipo User.
}

export const UserRow = ({ user }: UserRowProps) => {

    const { avatar, first_name, last_name, email } = user

    return (
        <tr>
            <td><img style={{ width: '50px' }} src={avatar} alt={user.first_name} /></td>
            <td>{first_name} {last_name}</td>
            <td>{email}</td>
        </tr>
    )
}

