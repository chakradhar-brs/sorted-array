// Function to find an element in a rotated sorted array
function findElement() {
    const arrayInput = document.getElementById("arrayInput").value.trim();
    const targetInput = parseInt(
      document.getElementById("targetInput").value.trim()
    );
    const rotatedArray = arrayInput.split(",").map(Number);
  
    const found = search(rotatedArray, targetInput);
  
    const elementResultDiv = document.getElementById("elementResult");
    if (found !== -1) {
      elementResultDiv.textContent = `Element ${targetInput} found at index ${found}.`;
    } else {
      elementResultDiv.textContent = `Element ${targetInput} not found in the array.`;
    }
  }
  
  // Function to perform binary search in rotated sorted array
  function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid;
      }
  
      if (nums[left] <= nums[mid]) {
        if (nums[left] <= target && target < nums[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        if (nums[mid] < target && target <= nums[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  
    return -1;
  }
  
  // Function to clear input fields
  function clearInputFields() {
    document.getElementById('arrayInput').value = '';
    document.getElementById('targetInput').value = '';
  }
  
  // Add event listener for window.onload event to clear input fields
  window.onload = clearInputFields;
  
  // Add event listener for "keypress" event to input fields
  document.getElementById("arrayInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        findElement();
    }
  });
  
  document.getElementById("targetInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        findElement();
    }
  });
  
  // Add event listener for button click
  document.getElementById("findElementButton").addEventListener("click", findElement);