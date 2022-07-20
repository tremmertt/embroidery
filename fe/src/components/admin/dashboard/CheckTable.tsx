const CheckTable = (props: any) => {
  return (
    <table className="table table-auto w-full my-3 text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase ">
        <tr>
          <th scope="col" className="py-3 px-6">
            Product name
          </th>
          <th scope="col" className="py-3 px-6">
            Price
          </th>
          <th scope="col" className="py-3 px-6">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <th scope="row" className="py-4 px-0 font-medium whitespace-nowrap ">
            Apple MacBook Pro 17"
          </th>
          <td className="py-4 px-0 text-center">$2999</td>
          <td className="py-4 px-0 text-center">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Edit
            </a>
          </td>
        </tr>
        <tr className="border-b">
          <th scope="row" className="py-4 px-0 font-medium whitespace-nowrap ">
            Microsoft Surface Pro
          </th>
          <td className="py-4 px-0 text-center">$1999</td>
          <td className="py-4 px-0 text-center">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Edit
            </a>
          </td>
        </tr>
        <tr className="border-b">
          <th scope="row" className="py-4 px-0 font-medium whitespace-nowrap ">
            Magic Mouse 2
          </th>
          <td className="py-4 px-0 text-center">$99</td>
          <td className="py-4 px-0 text-center">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Edit
            </a>
          </td>
        </tr>
        <tr className="border-b">
          <th scope="row" className="py-4 px-0 font-medium whitespace-nowrap ">
            Google Pixel Phone
          </th>
          <td className="py-4 px-0 text-center">$799</td>
          <td className="py-4 px-0 text-center">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Edit
            </a>
          </td>
        </tr>
        <tr>
          <th scope="row" className="py-4 px-0 font-medium whitespace-nowrap ">
            Apple Watch 5
          </th>
          <td className="py-4 px-0 text-center">$999</td>
          <td className="py-4 px-0 text-center">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Edit
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default CheckTable;
