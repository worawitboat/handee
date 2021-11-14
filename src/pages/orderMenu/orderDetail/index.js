export { default } from '../../../components/_pages/orderDetail'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}