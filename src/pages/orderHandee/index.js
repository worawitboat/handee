export { default } from '../../components/_pages/orderHandee'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}