export { default } from '../../components/_pages/deliverySuccess'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}