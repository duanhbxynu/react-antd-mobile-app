export default function List2(props) {
  return (
    <div>
      <div>{props?.sendData?.names}</div>
      <div>{props?.sendData?.address}</div>
      <div>{props?.sendData?.amount}</div>
      <div>{props?.sendData?.delivery ? '是': '否'}</div>
      <div>{props?.sendData?.birthday}</div>
      <div>{props?.sendData?.favoriteFruits}</div>
      <div>{props?.sendData?.slider}</div>
    </div>
  )
}
