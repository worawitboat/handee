export { default } from '../../components/_pages/HistoryProHand'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}