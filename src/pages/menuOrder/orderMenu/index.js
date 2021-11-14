export { default } from '../../../components/_pages/orderMenu'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}