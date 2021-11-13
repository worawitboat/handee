export { default } from '../../../../../../../components/_pages/order'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}