import s from './RoutingBtn.module.scss'

export const RoutingBtn = ({children, back}) => {return <>

<button className={back ? s.backBtn : s.showLikedBtn}>{children}</button>


</>}