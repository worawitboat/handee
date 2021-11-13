export { default } from '../../components/_pages/SelectHandOrder'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}