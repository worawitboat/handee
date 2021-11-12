export { default } from '../../components/_pages/SelectHandOrder'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}