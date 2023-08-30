// import { useRouter } from "next/navigation";
// import { useAuth } from "../Context/AppContext";
// import { FC, JSX,  useEffect } from "react";

// const PrivateRoute= (WrappedComponent: React.ElementType) => {
//    const { token } = useAuth()
//    const { push } = useRouter()

//    const Auth = ({ props }: React.ElementType) => {
//      useEffect(() => {
//        if (!token) {
//          push("/logon");
//        }
//      }, []);

//      return <WrappedComponent {...props} />;
//    };
//    return Auth
// };

// export default PrivateRoute
