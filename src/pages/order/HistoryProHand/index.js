export { default } from '../../../components/_pages/HistoryProHand'
import { getUserOrderById } from '../../../modules/_test/services'

export async function getServerSideProps(context) {
  const {data} = context.query

  const orderinfo = await getUserOrderById(JSON.parse(data).id)
  return { props: { appName: "handee",data, orderinfo} }

}