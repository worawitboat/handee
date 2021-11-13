export { default } from '../../components/_pages/DetailCommit'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}