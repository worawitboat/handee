export { default } from '../../components/_pages/detailOrder'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}