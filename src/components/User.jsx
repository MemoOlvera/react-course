import { useFetch } from "../hooks/useFetch";

export const User = () => {

    const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users');

    return (
        <>
            <h1>Lista de usuarios</h1>
            {
                isLoading
                    ? <p>Cargando...</p>
                    : errors
                        ? <p>Hubo un error: {errors}</p>
                        : <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(user => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.website}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
            }
        </>
    )
}