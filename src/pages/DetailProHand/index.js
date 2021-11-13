export { default } from '../../components/_pages/DetailProHand'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}