export { default } from '../../components/_pages/history'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}