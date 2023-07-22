import reactLogo from '../assets/react.svg'
import { updateName } from '../auth/authSlice';
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { useForm, Controller } from "react-hook-form";

type SignInForm = {
    name: string;
}

export default function Auth() {
    const name = useAppSelector(state => state.auth.name)
    const dispatch = useAppDispatch()

    const { handleSubmit, control } = useForm<SignInForm>({
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = (data: SignInForm) => {
        dispatch(updateName(data.name))
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={reactLogo} className="logo react" alt="React logo" /></figure>
                <div className="card-body -mt-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <input type="text" placeholder="Name" className="input input-bordered input-info w-full max-w-xs" {...field} />
                            )}
                        />

                        <div className="card-actions mt-3">
                            <button type="submit" className="btn btn-info w-full">Log in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>)
}