export { default } from '../../components/_pages/DetailHistory'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}