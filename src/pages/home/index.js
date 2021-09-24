export { default } from '../../components/_pages/home'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}