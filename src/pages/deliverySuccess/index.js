export { default } from '../../components/_pages/deliverySuccess'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}