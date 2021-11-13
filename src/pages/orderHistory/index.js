export { default } from '../../components/_pages/orderHistory'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}