export { default } from '../../components/_pages/pam'

export async function getServerSideProps(context) {
  return { props: { appName: "handee" } }

}