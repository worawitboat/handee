export { default } from '../../components/_pages/test'

export async function getServerSideProps(context) {
  return { props: { appName: "handee" } }

}