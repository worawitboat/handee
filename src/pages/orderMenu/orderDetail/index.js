export { default } from '../../../components/_pages/orderDetail'

export async function getStaticProps(context) {

  const { data } = context.query


  return { props: { appName: "handee", data: JSON.parse(data) } }

}