export { default } from '../../../../../components/_pages/DetailCommit'

export async function getServerSideProps(context) {
  const {data} = context.query
  return { props: { appName: "handee" ,data} }

}