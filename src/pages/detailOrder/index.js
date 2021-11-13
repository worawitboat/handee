export { default } from '../../components/_pages/detailOrder'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}