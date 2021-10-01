export { default } from '../../components/_pages/signin'

export async function getServerSideProps(context) {
  return { props: { appName: "handee" } }

}