# Acceptance Criteria Format

## Overview

Acceptance criteria can be formatted in various ways, but the most common and
effective formats include: Given/When/Then, Checklist, and Scenario-based
formats. These formats help ensure that the criteria are clear, testable, and
aligned with the user's needs.

## Formats

Here's a more detailed look at each format (see below for details and examples).

### Given/When/Then

This format, also known as Behavior-Driven Development (BDD) format, uses a
structured approach to describe the context, actions, and expected outcomes.

*Given:* Describes the initial context or preconditions.
*When:* Describes the action or event that triggers the behavior.
*Then:* Describes the expected outcome or result.

#### Given/When/Then Example

*Scenario:* A user adds an item to their cart.
*Given:* The user is logged in and on the product page.
*When:* The user clicks the "Add to Cart" button.
*Then:* The item is added to the shopping cart, and the cart icon updates to
reflect the new item count.

### Checklist

This format uses a simple list of bullet points to outline specific
requirements. It is a straightforward way to list the conditions that need to be
met.

#### Checklist Example

[ ] The product page displays the item's name, price, and description.
[ ] The "Add to Cart" button is visible and enabled.
[ ] The shopping cart icon updates to reflect the new item.
[ ] The user can proceed to checkout.

### Scenario-based

This format describes various scenarios and the expected behavior in each
scenario. It is useful for covering different use cases and edge cases.

#### Scenario-based Example

*Scenario:* User adds multiple items to the cart.
*Given:* The user has added two different items to the cart.
*When:* The user navigates to the shopping cart page.
*Then:* Both items are displayed in the cart with their respective quantities.
*And:* The total cost of all items is correctly calculated.
*Scenario:* User removes an item from the cart.
*Given:* The user has added an item to the cart.
*When:* The user clicks the "Remove" button for that item.
*Then:* The item is removed from the cart, and the total cost is updated.

## Key Characteristics of Good Acceptance Criteria

* Clear and concise: Easy to understand and avoid ambiguity.
* Testable: Can be verified through testing.
* Specific: Defines exact conditions or parameters.
* Measurable: Allows for clear pass/fail evaluation.
* Outcome-oriented: Focuses on the desired result rather than implementation
  details.
* Independent: Each criterion should be testable on its own.

## Conclusion

By using these formats and keeping the key characteristics in mind, teams can
effectively define acceptance criteria that ensure the delivered product meets
user expectations and business goals.
