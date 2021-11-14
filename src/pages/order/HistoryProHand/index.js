export { default } from '../../../components/_pages/HistoryProHand'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}