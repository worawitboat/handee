export { default } from '..//components/_pages/landing'

export async function getServerSideProps(context) {
  return { props: { appName: "handee" } }

}