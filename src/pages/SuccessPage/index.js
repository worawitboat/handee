export { default } from '../../components/_pages/SuccessPage'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}