export { default } from '../../components/_pages/orderEdit'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}