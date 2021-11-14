export { default } from '../../../../components/_pages/orderSuccess'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}