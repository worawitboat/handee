export { default } from '../../components/_pages/orderContent'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}