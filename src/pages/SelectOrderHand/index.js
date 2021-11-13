export { default } from '../../components/_pages/SelectOrderHand'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}