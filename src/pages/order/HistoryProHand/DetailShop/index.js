export { default } from '../../../../components/_pages/DetailShop'

export async function getServerSideProps(context) {
  const { dataid } = context.query
  return { props: { appName: "handee", dataid } }

}