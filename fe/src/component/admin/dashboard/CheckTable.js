export default function CheckTable(props) {
  return (
    <table className="table table-auto w-full my-3 text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase ">
        <tr>
          <th scope="col" class="py-3 px-6">
            Product name
          </th>
          <th scope="col" class="py-3 px-6">
            Price
          </th>
          <th scope="col" class="py-3 px-6">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b">
          <th scope="row" class="py-4 px-2 font-medium whitespace-nowrap ">
            Apple MacBook Pro 17"
          </th>
          <td class="py-4 px-2 text-center">$2999</td>
          <td class="py-4 px-2 text-center">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Edit
            </a>
          </td>
        </tr>
        <tr class="border-b">
          <th scope="row" class="py-4 px-2 font-medium whitespace-nowrap ">
            Microsoft Surface Pro
          </th>
          <td class="py-4 px-2 text-center">$1999</td>
          <td class="py-4 px-2 text-center">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Edit
            </a>
          </td>
        </tr>
        <tr class="border-b">
          <th scope="row" class="py-4 px-2 font-medium whitespace-nowrap ">
            Magic Mouse 2
          </th>
          <td class="py-4 px-2 text-center">$99</td>
          <td class="py-4 px-2 text-center">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Edit
            </a>
          </td>
        </tr>
        <tr class="border-b">
          <th scope="row" class="py-4 px-2 font-medium whitespace-nowrap ">
            Google Pixel Phone
          </th>
          <td class="py-4 px-2 text-center">$799</td>
          <td class="py-4 px-2 text-center">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Edit
            </a>
          </td>
        </tr>
        <tr>
          <th scope="row" class="py-4 px-2 font-medium whitespace-nowrap ">
            Apple Watch 5
          </th>
          <td class="py-4 px-2 text-center">$999</td>
          <td class="py-4 px-2 text-center">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Edit
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
