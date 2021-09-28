export { default } from '..//components/_pages/homework'

export async function getServerSideProps(context) {
  return { props: { appName: "handee" } }

}