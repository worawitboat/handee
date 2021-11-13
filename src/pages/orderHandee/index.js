export { default } from '../../components/_pages/orderhandee'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}